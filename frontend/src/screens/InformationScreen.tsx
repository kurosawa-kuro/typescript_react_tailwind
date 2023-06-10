import React, { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  id: number;
  title: string;
  body: string;
}

export const InformationScreen: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Data>(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-2 bg-custom-blue-lightest p-4 text-custom-blue-darkest">
      <h1 className="text-custom-blue-dark">{data?.title}</h1>
      <p className="mt-2 text-custom-blue">{data?.body}</p>
    </div>
  );
};
