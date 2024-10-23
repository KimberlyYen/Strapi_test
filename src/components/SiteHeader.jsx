import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'


export default function SiteHeader() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/heroes') // 呼叫所有評論的 API

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
    <div className='site-header'>
      <Link to="/"><h1>Reviews</h1></Link>
      {reviews.map((review) => (
        <div key={review.id} >
          {/* <nav className='categories'>{review.name}</nav> */}
          {/* 正確使用 review.documentId 作為連結的參數 */}
        </div>
      ))}
    </div>
  )
}
