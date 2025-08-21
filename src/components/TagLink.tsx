import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
  isSelected?: boolean;
};
export default function Tag({ tag, isSelected = false }: Props) {
  // If tag is selected, clicking it should go to main page to show all posts
  const href = isSelected ? "/" : "/posts/tags/[[...slug]]";
  const as = isSelected ? "/" : `/posts/tags/${tag.slug}`;
  
  return (
    <>
      <Link href={href} as={as}>
        <a className={`tag-link ${isSelected ? 'selected' : ''}`}>{tag.name}</a>
      </Link>
      <style jsx>{`
        .tag-link {
          display: inline-block;
          color: #9b9b9b;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }
        .tag-link:active,
        .tag-link:hover {
          color: #000;
        }
        .tag-link.selected {
          color: #222;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
