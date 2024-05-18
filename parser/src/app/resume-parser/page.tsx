"use client";
import { useState, useEffect } from "react";
import { readPdf } from "lib/parse-resume-from-pdf/read-pdf";
import type { TextItems } from "lib/parse-resume-from-pdf/types";
import { groupTextItemsIntoLines } from "lib/parse-resume-from-pdf/group-text-items-into-lines";
import { groupLinesIntoSections } from "lib/parse-resume-from-pdf/group-lines-into-sections";
import { extractResumeFromSections } from "lib/parse-resume-from-pdf/extract-resume-from-sections";
import { ResumeDropzone } from "components/ResumeDropzone";
import { cx } from "lib/cx";
import { Heading, Link, Paragraph } from "components/documentation";
import { ResumeTable } from "resume-parser/ResumeTable";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { ResumeParserAlgorithmArticle } from "resume-parser/ResumeParserAlgorithmArticle";
let RESUME_EXAMPLES = [
  {fileUrl: "http://localhost:4444/host/resume/39280eb4-2b79-4a91-9992-58aff7536da5.pdf"},
  {fileUrl: "http://localhost:4444/host/resume/57ed1226-fc40-44fb-82ef-35e2a9f296a1.pdf"},
  {fileUrl: "http://localhost:4444/host/resume/a0cc811f-33bf-4566-943b-1268e56c20ad.pdf"},
  {fileUrl: "http://localhost:4444/host/resume/904fa57b-02cb-4469-970b-ce0c6c5e4f98.pdf"}
];

export default function ResumeParser() {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [textItems, setTextItems] = useState<TextItems>([]);
  const lines = groupTextItemsIntoLines(textItems || []);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * RESUME_EXAMPLES.length);
    setFileUrl(RESUME_EXAMPLES[randomIndex].fileUrl);
  }, []);

  useEffect(() => {
    async function test() {
      const textItems = await readPdf(fileUrl);
      setTextItems(textItems);
    }
    if (fileUrl) {
      test();
    }
  }, [fileUrl]);

  return (
    <main className="h-full w-full overflow-hidden">
      <div className="grid md:grid-cols-6">
        <div className="flex justify-center px-2 md:col-span-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end">
          <section className="mt-5 grow px-4 md:max-w-[600px] md:px-0">
            <div className="aspect-h-[9.5] aspect-w-7">
              <iframe src={`${fileUrl}#navpanes=0`} className="h-full w-full" />
            </div>
          </section>
          <FlexboxSpacer maxWidth={45} className="hidden md:block" />
        </div>
        <div className="flex px-6 text-gray-900 md:col-span-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:overflow-y-scroll">
          <FlexboxSpacer maxWidth={45} className="hidden md:block" />
          <section className="max-w-[600px] grow">
            <div className="mt-3">
            </div>
            <ResumeTable resume={resume} />
            <div className="pt-24" />
            <div className="mt-3">
              <ResumeDropzone
                onFileUrlChange={(fileUrl) =>
                  setFileUrl(fileUrl || defaultFileUrl)
                }
                playgroundView={true}
              />
            </div>
          </section>
          
        </div>
      </div>
    </main>
  );
}