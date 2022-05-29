import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://reqres.in/api/users/${params.id}`,
    })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params.id]);
  console.log(data);
  return (
    <div>
      {loading && <div>...loading</div>}

      <div>
        <img src={data.avatar} alt="icon" />
        <div>Name:{data.first_name}</div>
        <div>Last_Name:{data.last_name}</div>
        <div>Email:{data.email}</div>
      </div>
    </div>
  );
};
