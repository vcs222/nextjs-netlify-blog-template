import React from "react";
import { PostContent } from "../lib/posts";
import PostTile from "./PostTile";
import TagLink from "./TagLink";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  hideTags?: boolean;
  selectedTag?: string;
};

export default function PostGrid({ posts, tags, hideTags = false, selectedTag }: Props) {
  return (
    <div className={"container"}>
      <div className={"posts"}>
        <div className={"post-grid"}>
          {posts.map((it, i) => (
            <PostTile key={i} post={it} />
          ))}
        </div>
      </div>
      {!hideTags && (
        <div className={"categories"}>
          <ul className="tags-list">
            {tags.map((it, i) => (
              <li key={i}>
                <TagLink tag={it} isSelected={selectedTag === it.slug} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .post-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-bottom: 2rem;
          width: 100%;
        }
        .categories {
          display: none;
          margin-left: 2rem;
          width: 7rem;
          height: fit-content;
          position: sticky;
          top: 2rem;
        }
        .categories-title {
          margin: 0 0 1rem 0;
          color: #333;
          font-size: 1.1rem;
          font-weight: 600;
        }
        .tags-list {
          margin: 0;
          padding: 0;
        }
        .tags-list li {
          margin-bottom: 0.5rem;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
          .post-grid {
            gap: 3px;
          }
        }

        @media (max-width: 768px) {
          .post-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2px;
          }
        }
        
        @media (max-width: 480px) {
          .post-grid {
            grid-template-columns: 1fr;
            gap: 2px;
          }
        }
      `}</style>
    </div>
  );
}
