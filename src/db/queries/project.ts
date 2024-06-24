import { db } from "..";

interface Project {
  name?: string;
  title?: string;
  chainId?: string;
  logoUrl?: string;
  theme?: string;
  userId?: string;
  useSmartWallet?: string;
}

export async function addProject(project: Project) {
  try {
    const data = await db("projects").insert(project).returning("*");
    return data[0];
  } catch (error) {
    console.error(error);
    throw Error("error in addProject query function");
  }
}

export async function getUserProjects(
  userId: string,
  page?: number,
  size?: number,
) {
  page = page ?? 1;
  size = size ?? 50;
  if (page < 1) page = 1;
  const offset = (page - 1) * size;
  try {
    const [total, rows] = await Promise.all([
      db("projects").count("* as count").first(),
      db("projects")
        .select("*")
        .where("userId", userId)
        .offset(offset)
        .limit(size),
    ]);
    return {
      totalCount: Number(total?.count),
      count: rows.length,
      size: size,
      currentPage: page,
      totalPages: Math.ceil(Number(total?.count) / size),
      data: rows,
    };
  } catch (error) {
    console.error(error);
    throw Error("error in addProject query function");
  }
}
