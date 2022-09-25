import Hero from "../../components/sections/Hero"
import Section from "../../components/sections/Section"
import Section2 from "../../components/sections/Section2"

export default function Landing() {
    return (
        <>
            <Hero
                title="Build this rad landing page from scratch"
                subtitle="This is the subheader section where you describe the basic benefits of your product"
                image="https://source.unsplash.com/collection/404339/800x600"
                ctaText="Create your account now"
            />
            <Section />
            <Hero
                title="Build this rad landing page from scratch"
                subtitle="This is the subheader section where you describe the basic benefits of your product"
                image="https://source.unsplash.com/collection/404339/800x600"
                ctaText="Create your account now"
            />

        </>
    )
}