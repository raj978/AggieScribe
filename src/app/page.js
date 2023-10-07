import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadIcon from "@/components/UploadIcon";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text={'Add agg-curate captions to your lectures!'}
        h2Text={'Just upload your video and we will do the rest'}
      />
      < div className="text-center">

        <label className="bg-green-600 py-2 px-4 rounded-full inline-flex border-blue-800/50 border-2 gap-2 cursor-pointer">
          <UploadIcon />
          <span>Choose file</span>
          <input type="file" className="hidden" />
        </label>
      </div>
      <DemoSection />
    </>
  )
}
