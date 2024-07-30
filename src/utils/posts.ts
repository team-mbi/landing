import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

const load = () => {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace('.md', '');
        return await findPostBySlug(slug);
      }),
  );

  return posts;
};

let _posts: any;

/** */
export const fetchPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};

/** */
interface findLatestPostsProps {
  count?: number;
}
export const findLatestPosts = async ({ count }: findLatestPostsProps = {}) => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(_count * -1) : [];
};

/** */
export const findPostBySlug = async (slug: string) => {
  if (!slug) return null;

  try {
    const readFile = fs.readFileSync(join(BLOG_DIR, `${slug}.md`), 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (e) {}

  return null;
};

/** */
export const findPostsByIds = async (ids = []) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r: any, id) {
    posts.some(function (post: any) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
