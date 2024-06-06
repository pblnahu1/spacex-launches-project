// Fetching de Datos
// Acá se puede ejecutar el javascript

import { type Doc, type APISpaceXResponse } from "../type/api";

export const getLaunchBy = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${ id }`)

  const launch = (await res.json()) as Doc;
  // const data = JSON.stringify(await res.json())
  // console.log(data)

  // Con el `data` ya es accesible y se puede usar

  console.log(launch)

  return launch
}

export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });

  const { docs: launches } = (await res.json()) as APISpaceXResponse;
  // const data = JSON.stringify(await res.json())
  // console.log(data)

  // Con el `data` ya es accesible y se puede usar
  return launches
}
