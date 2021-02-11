import Link from "next/link";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import { SocialList } from "../../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <div className="container">
        <div>
          <span className="about">
            <Link href="/"><a className="fancy">wabicsabi.com</a></Link> is a personal blog, the way how I embrace my imperfect view on... stuff.
          </span>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .about {
          display: inline-block;
          font-size: 1.5rem;
          // margin-top: 0.275em;
          margin-bottom: 1em;
          // color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        // @media (min-width: 769px) {
        //   h1 {
        //     font-size: 3rem;
        //   }
        //   h2 {
        //     font-size: 2.25rem;
        //   }
        // }
      `}</style>
    </Layout>
  );
}
