import { PostContent } from "../lib/posts";
import Link from "next/link";
import TagLink from "./TagLink";
import { getTag } from "../lib/tags";

type Props = {
  post: PostContent;
};

export default function PostTile({ post }: Props) {
  // Get the first image from the post content, or fallback to slug-based naming
  const imagePath = post.firstImage || `/images/${post.slug}-1200.jpg`;
  
  // Extract first 2 lines of text content (excluding markdown)
  const getFirstTwoLines = (content: string) => {
    const lines = content
      .split('\n')
      .filter(line => line.trim() && !line.startsWith('![') && !line.startsWith('#'))
      .slice(0, 2);
    return lines.join(' ').substring(0, 120) + (lines.join(' ').length > 120 ? '...' : '');
  };

  return (
    <div className="instagram-tile">
      <Link href={"/posts/" + post.slug}>
        <a className="tile-link">
          <div className="tile-image">
            <img 
              src={imagePath} 
              alt={post.title}
              onError={(e) => {
                // Fallback to a default image if the specific image doesn't exist
                e.currentTarget.src = "/images/600x300.png";
              }}
            />
            <div className="tile-overlay">
              <div className="overlay-content">
                <h3 className="overlay-title">{post.title}</h3>
                <p className="overlay-text">{getFirstTwoLines(post.content)}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .instagram-tile {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 0;
          background: #000;
        }
        
        .tile-link {
          text-decoration: none;
          color: inherit;
          display: block;
          width: 100%;
          height: 100%;
        }
        
        .tile-image {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .tile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .tile-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
          color: white;
          padding: 1.5rem 1rem 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          transform: translateY(20px);
        }
        
        .instagram-tile:hover .tile-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        .instagram-tile:hover .tile-image img {
          transform: scale(1.05);
        }
        
        .overlay-content {
          text-align: left;
        }
        
        .overlay-title {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.2;
          color: white;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }
        
        .overlay-text {
          margin: 0 0 0.75rem 0;
          font-size: 0.9rem;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }
        
        @media (max-width: 768px) {
          .tile-overlay {
            padding: 1rem 0.75rem 0.75rem;
          }
          
          .overlay-title {
            font-size: 1rem;
          }
          
          .overlay-text {
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
