import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'

type TextProps = SliceComponentProps<Content.TextSlice>

const Text = ({ slice }: TextProps) => {
  return (
    <section className="text-lg leading-relaxed">
      <PrismicRichText
        field={slice.primary.text}
        components={{
          heading2: ({ children }) => (
            <h2 className="mt-12 mb-4 text-3xl leading-snug">{children}</h2>
          ),
          heading3: ({ children }) => (
            <h2 className="mt-8 mb-4 text-2xl leading-snug">{children}</h2>
          ),
          paragraph: ({ children }) => <p className="my-6">{children}</p>,
          list: ({ children }) => <ul className="my-6">{children}</ul>,
          oList: ({ children }) => <ol className="my-6">{children}</ol>,
        }}
      />
    </section>
  )
}

export default Text
