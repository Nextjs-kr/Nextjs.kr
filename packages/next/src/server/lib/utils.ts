import type arg from 'next/dist/compiled/arg/index.js'
import { getFreePort } from './worker-utils'

export function printAndExit(message: string, code = 1) {
  if (code === 0) {
    console.log(message)
  } else {
    console.error(message)
  }

  process.exit(code)
}

export const genRouterWorkerExecArgv = async (
  isNodeDebugging: boolean | 'brk'
) => {
  const execArgv = process.execArgv.filter((localArg) => {
    return (
      !localArg.startsWith('--inspect') && !localArg.startsWith('--inspect-brk')
    )
  })

  if (isNodeDebugging) {
    const debugPort = await getFreePort()
    execArgv.push(
      `--inspect${isNodeDebugging === 'brk' ? '-brk' : ''}=${debugPort + 1}`
    )
  }

  return execArgv
}

const NODE_INSPECT_RE = /--inspect(-brk)?(=\S+)?( |$)/
export function getNodeOptionsWithoutInspect() {
  return (process.env.NODE_OPTIONS || '').replace(NODE_INSPECT_RE, '')
}

export function getPort(args: arg.Result<arg.Spec>): number {
  if (typeof args['--port'] === 'number') {
    return args['--port']
  }

  const parsed = process.env.PORT && parseInt(process.env.PORT, 10)
  if (typeof parsed === 'number' && !Number.isNaN(parsed)) {
    return parsed
  }

  return 3000
}
