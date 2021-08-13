import React from 'react';

import remark from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';
import prism from 'remark-prism';

import fs from 'fs';
import path from 'path';

import Head from 'next/head';

import Page from '@components/page';
import Container from '@components/container';
import Markdown from '@components/markdown';

const docsDirectory: string = path.join(process.cwd(), 'docs');

export default function docsPage({ children, title }) {
    return (
        <Page>

            <Head>
                <title>Steven Krahforst » Dokumentation { title && `» ${title}` }</title>
            </Head>

            <Container>
                <Markdown dangerouslySetInnerHTML={{ __html: children }} />
            </Container>

        </Page>
    );
}

export async function getStaticProps({ params: { slug } }: { params: { slug: Array<string> } }): Promise<{ props: any }> {
    const contentPath: string = slug.length > 1 ? path.join(docsDirectory, ...slug.slice(0, -1), `${slug[slug.length - 1]}.md`) : path.join(docsDirectory, `${slug[0]}.md`);
    const content: string = await (await remark().use(html).use(prism).use(gfm).process(fs.readFileSync(contentPath).toString())).toString() ?? '';
    const titleMatch: RegExpMatchArray | null = /^<h1>([a-zA-Z0-9\s]+)<\/h1>/m.exec(content);
    return {
        props: {
            title: titleMatch && titleMatch[1],
            children: content
        }
    };
}

function getFilesInDirectory(directory: string, extension?: string): Array<string> {
    let files: Array<string> = [];
    for(const file of fs.readdirSync(directory)) {
        const p: string = path.join(directory, file);
        if(fs.statSync(p).isDirectory()) {
            files.push(...getFilesInDirectory(p));
        } else {
            if(!extension || (extension && p.endsWith(extension))) {
                files.push(p);
            }
        }
    }
    return files;
}

export async function getStaticPaths(): Promise<{ paths: Array<any>, fallback: boolean }> {
    return {
        paths: getFilesInDirectory(docsDirectory, '.md').map((file: string): { params: { slug: Array<string> } } => ({
            params: {
                slug: file.substring(docsDirectory.length + 1, file.length - 3).split('\\')
            }
        })),
        fallback: false
    };
}