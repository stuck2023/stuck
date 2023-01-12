import supabase from "../config/supabase";

export default async function Home() {
  const { data: projects }: any = await supabase
    .from("projects")
    .select("id, title");

  if (!projects) return <p>no projects</p>;

  console.log(projects);

  return (
    <div>
      <h1 className="text-8xl underline p-4 bg-blue-500">helloo</h1>
      <p className="text-2xl bg-white text-black">fdjksfjsdlfj</p>
      <p className="text-2xl flex w-full bg-white text-black">
        {projects[0].title} xDDD
      </p>
    </div>
  );
}
