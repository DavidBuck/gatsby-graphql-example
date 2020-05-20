import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: { posts } }) => (
  <div className="container mx-auto p-4 m-4 border-solid border-2 border-gray-600 bg-gray-200">
    <h1 className="font-sans text-4xl text-gray-800 py-2 text-center">
      Gatsby Third-party GraphQL Source Example
    </h1>
    <table className="font-sans table-auto py-4 border-gray-500">
      <thead>
        <tr className="bg-gray-500">
          <th className="px-4 py-2 border-gray-600 text-center">Id</th>
          <th className="px-4 py-2 border-gray-600 text-center">Title</th>
          <th className="px-4 py-2 border-gray-600 text-center">Author</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td className="underline hover:bg-red-300 border px-4 py-2 border-gray-600">
              <Link to={`/post/${post.id}`}>{post.id}</Link>
            </td>
            <td className="border px-4 py-2 border-gray-600">{post.title}</td>
            <td className="border px-4 py-2 border-gray-600">
              {post.user.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
