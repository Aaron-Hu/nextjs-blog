import { getSortedPostsData } from '../../lib/posts'
export default function handler(req, res) {
  setTimeout(() => {
    res.status(200).json(getSortedPostsData())
  }, 3000)
}