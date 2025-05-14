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

// Extended types to include code and custom marks
interface CodeNode {
  _type: "code";
  language?: string;
  code?: string;
  highlightedLines?: number[];
  filename?: string;
}

interface ImageNode {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

interface HighlightMark {
  _type: "highlight";
  color?: string;
}

interface LinkMark {
  _type: "link";
  href: string;
  blank?: boolean;
}

// Enhanced serializers with better styling and more features
const serializers: PortableTextComponents = {
  types: {
    code: ({ value }: PortableTextTypeComponentProps<CodeNode>) => (
      <div className="my-6 not-prose">
        {value.filename && (
          <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-t-lg font-mono text-sm border-b border-gray-700">
            {value.filename}
          </div>
        )}
        <SyntaxHighlighter
          language={value?.language || "text"}
          style={atomOneDark}
          className="rounded-b-lg text-sm"
          showLineNumbers
          wrapLines
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor:
                value.highlightedLines?.includes(lineNumber) ?
                  "rgba(200, 200, 255, 0.1)"
                : "transparent",
            },
          })}
        >
          {value?.code || ""}
        </SyntaxHighlighter>
      </div>
    ),
    image: ({ value }: PortableTextTypeComponentProps<ImageNode>) => {
      const imageUrl = urlFor(value)?.width(1200).height(800).fit("max").url() || '';

      return (
        <figure className="my-8 not-prose">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={value?.alt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          {value?.caption && (
            <figcaption className="text-center mt-3 text-gray-600 dark:text-gray-400 text-sm">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    highlight: ({
      children,
      value,
    }: PortableTextMarkComponentProps<HighlightMark>) => (
      <span
        className="px-1 rounded bg-yellow-200 dark:bg-yellow-800 dark:text-yellow-100"
        style={value?.color ? { backgroundColor: value.color } : {}}
      >
        {children}
      </span>
    ),
    link: ({ children, value }: PortableTextMarkComponentProps<LinkMark>) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
        {children}
      </code>
    ),
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed opacity-80">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 mt-10">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-5 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold mb-3 mt-5">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-4 space-y-2 opacity-80">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  hardBreak: false,
};

interface PortableTextProps {
  blocks: PortableTextBlock | PortableTextBlock[];
  className?: string;
}

export default function PortableText({ blocks, className }: PortableTextProps) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none dark:prose-invert",
        "prose-headings:font-sans prose-p:font-serif",
        "prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline",
        "prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:bg-transparent prose-pre:p-0",
        className
      )}
    >
      <PortableTextComponent
        value={blocks}
        components={serializers}
      />
    </div>
  );
}
