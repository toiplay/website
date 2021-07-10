import React from 'react';

import matter from 'gray-matter';

import remark from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';
import prism from 'remark-prism';

import fs from 'fs';
import path from 'path';

import Page from '@components/page';
import Container from '@components/container';
import Markdown from '@components/markdown';

const docsDirectory: string = path.join(process.cwd(), 'docs');

interface Slug {

    slug: string
    meta: any
    content: string

}

function getDocBySlug(slug: string): Slug {
    const realSlug: string = slug.replace(/\.md$/, '');
    const { data, content }: { data: any, content: string } = matter(fs.readFileSync(path.resolve(docsDirectory, `${realSlug}.md`), 'utf8'));
    return { slug: realSlug, meta: data, content };
}

function getAllDocs(): Array<Slug> {
    return fs.readdirSync(docsDirectory).map((slug: string): Slug => getDocBySlug(slug));
}

export default function docsPage({ children }) {
    return (
        <Page>
            <Container>
                <Markdown dangerouslySetInnerHTML={{ __html: children }} />
            </Container>
        </Page>
    );
}

export async function getStaticProps({ params }): Promise<{ props: any }> {
    const doc: Slug = getDocBySlug(params.slug);
    const content: string = await (await remark().use(html).use(prism).use(gfm).process(doc.content)).toString() ?? '';
    return {
        props: {
            ...doc,
            children: content
        }
    };
}

export async function getStaticPaths(): Promise<{ paths: Array<{ params: { slug: string } }>, fallback: boolean }> {
    return {
        paths: getAllDocs().map((doc: Slug): { params: { slug: string } } => ({
            params: {
                slug: doc.slug
            }
        })),
        fallback: false
    };
}