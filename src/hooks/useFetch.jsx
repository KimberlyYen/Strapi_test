import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                // 檢查響應狀態
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { loading, error, data };
};

export default useFetch;
