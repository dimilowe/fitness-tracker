const BASE_API = "https://fitnesstrac-kr.herokuapp.com/api/activities";
import { useQuery } from "@tanstack/react-query";

export default function ActivitiesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const res = await fetch(BASE_API);
      const activities = await res.json();
      return activities;
    },
  });
  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ul>
        {data?.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
