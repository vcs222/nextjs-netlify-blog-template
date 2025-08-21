import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function TagButton({ tag }: Props) {
  return (
    <>
      <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
        <a className="tag-button">{tag.name}</a>
      </Link>
      <style jsx>{`
        .tag-button {
          display: inline-block;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.15);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          padding: 0.2em 0.5em;
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 500;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
        .tag-button:active,
        .tag-button:hover {
          background-color: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}
