import { MessageCircle, ThumbsUp } from "lucide-react"

const PopularBlogs = () => {
  const blogs = [
    {
      title: "My Amazing Blog Title 1",
      author: "Rony",
      likes: 254,
      comments: 25
    },
    {
      title: "My Amazing Blog Title 2",
      author: "Jordan",
      likes: 142,
      comments: 44
    },
    {
      title: "My Amazing Blog Title 3",
      author: "Rocky",
      likes: 789,
      comments: 12
    },
    {
      title: "My Amazing Blog Title 4",
      author: "Yzeck",
      likes: 78,
      comments: 5
    },
  ] 

  return (
    <div className="bg-white p-5 mx-5 mt-[2rem] border rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4 ">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>
            <span className="text-gray-600">Published by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-2 ml-2">
                {blog.likes}
              </span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-2 ml-2">
                {blog.comments}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularBlogs