import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text={'Add agg-curate captions to your lectures!'}
        h2Text={'Just upload your video and we will do the rest'}
      />
      < div className="text-center">
        <UploadForm />
      </div>

      <DemoSection />
    </>
  )
}
