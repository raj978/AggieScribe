export default function PageHeaders({
    h1Text = 'Hello',
    h2Text = 'Subheader',
}) {
    return (
        <section className="text-center mt-12 sm:mt-24 mb-4 sm:mb-8">
            <h1 className="text-xl sm:text-3xl" style={{ textShadow: '2px 2px 0 rgba(1,1,1,.2)' }}>
                {h1Text}
            </h1>
            <h2 className="text-black/75 test-sm sm:text-base">
                {h2Text}
            </h2>
        </section>
    )
}