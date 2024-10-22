import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ReviewDetails() {
  const { documentId } = useParams();  // 從 URL 中獲取 documentId

  // 正確的 API URL 請求
  const { loading, error, data } = useFetch(`http://localhost:1337/api/reviews/${documentId}`);

  if (loading) return <p>Loading....</p>;
  if (error || !data) {
    return <p>Error: {error?.message || "Unknown error occurred or no data available"}</p>;
  }

  // 確認數據
  const review = data.data;  // 單一評論的數據

  return (
    <div className="review-card">
      <div className="rating">{review.rating}</div>
      <h2>{review.title}</h2>
      <p>{review.body[0]?.children[0]?.text}</p> {/* 顯示正文 */}
    </div>
  );
}
