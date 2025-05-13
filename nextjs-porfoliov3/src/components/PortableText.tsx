import { cn, urlFor } from "@/lib/utils";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import type {
  PortableTextBlock,
  PortableTextComponents,
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeNode {
  _type: "code";
  language?: string;
  code?: string;
  highlightedLines?: number[];
}

interface ImageNode {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

interface HighlightMark {
  _type: "highlight";
  color?: string;
}

const serializers: PortableTextComponents = {
  types: {
    code: ({ value }: PortableTextTypeComponentProps<CodeNode>) => (
      <div className="my-4">
        <SyntaxHighlighter
          language={value?.language || "text"}
          style={atomOneDark}
          className="rounded-lg text-sm"
          showLineNumbers
          wrapLines
        >
          {value?.code || ""}
        </SyntaxHighlighter>
      </div>
    ),
    image: ({ value }: PortableTextTypeComponentProps<ImageNode>) => (
      <figure className="my-6 mx-auto">
        <Image
          src={urlFor(value)?.url() || ''}
          alt={value?.alt || ""}
          className="rounded-lg shadow-lg max-h-96 mx-auto"
        />
        {value?.caption && (
          <figcaption className="text-center italic mt-2 text-gray-600">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    highlight: ({
      children,
      value,
    }: PortableTextMarkComponentProps<HighlightMark>) => (
      <span
        className="px-1 rounded bg-yellow-200"
        style={value?.color ? { backgroundColor: value.color } : {}}
      >
        {children}
      </span>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};

interface PortableTextProps {
  blocks: PortableTextBlock | PortableTextBlock[];
  className?: string;
}

export default function PortableText({ blocks, className }: PortableTextProps) {
  return (
    <div className={cn("prose prose-lg max-w-none", className)}>
      <PortableTextComponent
        value={blocks}
        components={serializers}
      />
    </div>
  );
}
