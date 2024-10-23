import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('https://grounded-compassion-7a840a9fe7.strapiapp.com/api/reviews') // 呼叫所有評論的 API

  if (loading) return <p>Loading....</p>
  if (error || !data) {
    console.log('Error or Empty Data:', error); // 輸出錯誤訊息或空數據檢查
    return <p>Error: {error?.message || 'Unknown error occurred or no data available'}</p>;
  }

  // 如果 data 存在並且 data.data 是陣列，才進行映射
  const reviews = data.data || []

  // console.log('Fetched Data:', data)
  // console.log('reviews', reviews[0]?.documentId)  // 顯示第一個文件的 documentId 以確保正確抓到資料

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className='review-card'>
          <div className='rating'> {review.rating} </div>
          <h2>{review.title}</h2>
          <small> console list </small>
          <p>{review.body[0]?.children[0]?.text.substring(0, 200)}...</p>
          {/* 正確使用 review.documentId 作為連結的參數 */}
          <Link to={`/details/${review.documentId}`}>Read more</Link>

        </div>
      ))}
    </div>
  )
}
