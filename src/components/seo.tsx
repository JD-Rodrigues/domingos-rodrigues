import { DefaultSeo } from "next-seo";


export const SEO = () => {
  return(
    <DefaultSeo 
      openGraph={{
        locale: 'pt_BR',
        siteName: 'Domingos Rodrigues',
      }}
      twitter={{
        handle: '@JDev_Oficial',
        site: '@JDev_Oficial',
        cardType: 'summary_large_image',
      }}
    />
  )
}