import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
          <div key={item.id}>
            <Link link={post.link} className="item">
              <Html2React html={post.title.rendered} />
            </Link>
            {!data.isDestinationsArchive && (
              <Link link={post.link} className="item">
                <img src={state.source.attachment[post.featured_media].source_url} />
              </Link>
            )}
            <Html2React html={post.excerpt.rendered} />
            <Link link={post.link} className="item">Read more...</Link>
            <br />
          </div>
        );
      })}
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </Items>
  );
};

const Items = styled.div`
  a.item {
    display: block;
    margin: 6px 0 12px;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`;

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }

  & > button:hover {
    cursor: pointer;
  }
`;

export default connect(List);