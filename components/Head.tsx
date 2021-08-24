import NextHead from 'next/head'

const SITE_URL = 'https://yui540.design'
const SITE_NAME = 'はらぺこオレンジとチョコレート'
const DESCRIPTION = '甘い。酸っぱい。甘酸っぱい。'

interface Props {
  title: string
}

export default function Head({ title }: Props) {
  return (
    <NextHead>
      <title>{title}</title>

      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="keywords" content="yui540,CSSアニメーション" />
      <meta name="theme-color" content="#f4ad60" />
      <meta name="description" content={DESCRIPTION} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="thumbnail" content={`${SITE_URL}/webclip.png`} />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="webclip.png" />
      <link rel="icon" type="image/png" href="webclip.png" />

      <meta property="og:url" content={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${SITE_URL}/ogp.png`} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="ja_JP" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yui540" />
      <meta name="twitter:url" content={SITE_URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={`${SITE_URL}/ogp.png`} />

      {/* adobe fonts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(d) {
          var config = {
            kitId: 'kap1suf',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);`,
        }}
      />

      {/* google analytics */}
      <script src="https://www.googletagmanager.com/gtag/js?id=G-XWG8SH7D5X" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XWG8SH7D5X');`,
        }}
      />

      <style>{`
        html {}
        body {}
      `}</style>
    </NextHead>
  )
}
