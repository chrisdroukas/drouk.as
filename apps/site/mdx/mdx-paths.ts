import fs from "fs";
import path from "path";

/**
 * The location of the posts path. This value
 * can be used to help determine the path of
 * a specific MDX document.
 */
export const PostsPath = path.join(process.cwd(), "posts");

/**
 * Post File Paths is an array of all MDX
 * documents contained within the Posts Path
 * directory.
 *
 * This array is filtered for documents with
 * the `.mdx` extension, exclusively.
 */
export const PostFilePaths: string[] = fs
  .readdirSync(PostsPath)
  .filter((path) => /\.mdx?$/.test(path));
