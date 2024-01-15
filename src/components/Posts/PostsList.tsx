/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { PostsContext } from './PostContext';
import { Post } from '../../types/Post';

export const PostsList: React.FC = () => {
  const {
    posts,
    selectedPost,
    setSelectedPost,
  } = useContext(PostsContext);

  const selectPost = (item: Post) => {
    (item.id === selectedPost?.id)
      ? setSelectedPost(null)
      : setSelectedPost(item);
  };

  return (
    <div data-cy="PostsList">
      <p className="title">Posts:</p>

      <table className="table is-fullwidth is-striped is-hoverable is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map(post => (
            <tr data-cy="Post" key={post.id}>
              <td data-cy="PostId">{post.id}</td>

              <td data-cy="PostTitle">{post.title}</td>

              <td className="has-text-right is-vcentered">
                <button
                  type="button"
                  data-cy="PostButton"
                  className={classNames(
                    'button',
                    'is-link',
                    { 'is-light': selectedPost !== post },
                  )}
                  onClick={() => selectPost(post)}
                >
                  {selectedPost === post ? 'Close' : 'Open'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
