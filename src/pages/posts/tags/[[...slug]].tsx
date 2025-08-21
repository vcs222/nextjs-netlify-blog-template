import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import PostGrid from "../../../components/PostGrid";
import config from "../../../lib/config";
import { getAllPosts, PostContent } from "../../../lib/posts";
import { getTag, listTags, TagContent } from "../../../lib/tags";
import Head from "next/head";

type Props = {
  posts: PostContent[];
  tag: TagContent;
  allTags: TagContent[];
};

export default function Index({ posts, tag, allTags }: Props) {
  const url = `/posts/tags/${tag.name}`;
  const title = `Posts tagged with "${tag.name}"`;
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <PostGrid posts={posts} tags={allTags} selectedTag={tag.slug} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params.slug as string[];
  const [slug] = [queries[0]];
  
  // Get all posts for this tag (no pagination needed for grid view)
  const posts = getAllPosts(slug);
  const tag = getTag(slug);
  const allTags = listTags();
  
  return {
    props: {
      posts,
      tag,
      allTags,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags().map((tag) => ({
    params: { slug: [tag.slug] },
  }));
  
  return {
    paths: paths,
    fallback: false,
  };
};
