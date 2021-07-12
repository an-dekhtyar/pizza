import ContentLoader from "react-content-loader"


export const PizzaLoader = () => {

    return  (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="132" cy="142" r="115" />
            <rect x="-1" y="286" rx="3" ry="3" width="280" height="26" />
            <rect x="0" y="324" rx="3" ry="3" width="280" height="84" />
            <rect x="0" y="421" rx="0" ry="0" width="89" height="25" />
            <rect x="138" y="421" rx="20" ry="20" width="142" height="36" />
        </ContentLoader>
    )

}