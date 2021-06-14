import { wrapFunctional } from './utils'

export { default as Grid } from '../../components/Grid.vue'
export { default as LandingPage } from '../../components/Landing-page.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as OverMij } from '../../components/Over-mij.vue'
export { default as Page } from '../../components/Page.vue'
export { default as Review } from '../../components/Review.vue'
export { default as AanbodInfo } from '../../components/Aanbod/Aanbod-info.vue'
export { default as AanbodPakkettenInfo } from '../../components/Aanbod/Pakketten-info.vue'
export { default as AanbodPakketten } from '../../components/Aanbod/Pakketten.vue'
export { default as Footer } from '../../components/Footer/Footer.vue'
export { default as AanpakNietZoalsJeWilt } from '../../components/Aanpak/NietZoalsJeWilt.vue'
export { default as AanpakSamenBereiken } from '../../components/Aanpak/SamenBereiken.vue'
export { default as AanpakTraject } from '../../components/Aanpak/Traject.vue'
export { default as HomeHulpIdeaalComponent } from '../../components/Home/HulpIdeaalComponent.vue'
export { default as HomeLandingComponent } from '../../components/Home/LandingComponent.vue'
export { default as MenuAppLinks } from '../../components/Menu/AppLinks.vue'
export { default as MenuTheHeader } from '../../components/Menu/TheHeader.vue'
export { default as MenuTheSideNav } from '../../components/Menu/TheSideNav.vue'
export { default as NavigationNavigationbar } from '../../components/Navigation/Navigationbar.vue'
export { default as NavigationTheHeader } from '../../components/Navigation/TheHeader.vue'
export { default as NavigationTheSideNav } from '../../components/Navigation/TheSideNav.vue'
export { default as NavigationAppLinks } from '../../components/Navigation/appLinks.vue'
export { default as OvermijNavigationNavigationbarOvermij } from '../../components/OvermijNavigation/NavigationbarOvermij.vue'
export { default as OvermijNavigationTheHeaderOvermij } from '../../components/OvermijNavigation/TheHeaderOvermij.vue'
export { default as OvermijNavigationTheSideNavOvermij } from '../../components/OvermijNavigation/TheSideNavOvermij.vue'
export { default as OvermijNavigationAppLinksOverMij } from '../../components/OvermijNavigation/appLinksOverMij.vue'
export { default as RouwVerliesBegeleiding } from '../../components/RouwVerlies/Begeleiding.vue'
export { default as RouwVerlies } from '../../components/RouwVerlies/RouwVerlies.vue'
export { default as RouwVerliesSignalen } from '../../components/RouwVerlies/Signalen.vue'
export { default as SuccesverhalenReview } from '../../components/Succesverhalen/Review.vue'

export const LazyGrid = import('../../components/Grid.vue' /* webpackChunkName: "components/grid" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingPage = import('../../components/Landing-page.vue' /* webpackChunkName: "components/landing-page" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyOverMij = import('../../components/Over-mij.vue' /* webpackChunkName: "components/over-mij" */).then(c => wrapFunctional(c.default || c))
export const LazyPage = import('../../components/Page.vue' /* webpackChunkName: "components/page" */).then(c => wrapFunctional(c.default || c))
export const LazyReview = import('../../components/Review.vue' /* webpackChunkName: "components/review" */).then(c => wrapFunctional(c.default || c))
export const LazyAanbodInfo = import('../../components/Aanbod/Aanbod-info.vue' /* webpackChunkName: "components/aanbod-info" */).then(c => wrapFunctional(c.default || c))
export const LazyAanbodPakkettenInfo = import('../../components/Aanbod/Pakketten-info.vue' /* webpackChunkName: "components/aanbod-pakketten-info" */).then(c => wrapFunctional(c.default || c))
export const LazyAanbodPakketten = import('../../components/Aanbod/Pakketten.vue' /* webpackChunkName: "components/aanbod-pakketten" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyAanpakNietZoalsJeWilt = import('../../components/Aanpak/NietZoalsJeWilt.vue' /* webpackChunkName: "components/aanpak-niet-zoals-je-wilt" */).then(c => wrapFunctional(c.default || c))
export const LazyAanpakSamenBereiken = import('../../components/Aanpak/SamenBereiken.vue' /* webpackChunkName: "components/aanpak-samen-bereiken" */).then(c => wrapFunctional(c.default || c))
export const LazyAanpakTraject = import('../../components/Aanpak/Traject.vue' /* webpackChunkName: "components/aanpak-traject" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeHulpIdeaalComponent = import('../../components/Home/HulpIdeaalComponent.vue' /* webpackChunkName: "components/home-hulp-ideaal-component" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeLandingComponent = import('../../components/Home/LandingComponent.vue' /* webpackChunkName: "components/home-landing-component" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuAppLinks = import('../../components/Menu/AppLinks.vue' /* webpackChunkName: "components/menu-app-links" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuTheHeader = import('../../components/Menu/TheHeader.vue' /* webpackChunkName: "components/menu-the-header" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuTheSideNav = import('../../components/Menu/TheSideNav.vue' /* webpackChunkName: "components/menu-the-side-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationNavigationbar = import('../../components/Navigation/Navigationbar.vue' /* webpackChunkName: "components/navigation-navigationbar" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationTheHeader = import('../../components/Navigation/TheHeader.vue' /* webpackChunkName: "components/navigation-the-header" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationTheSideNav = import('../../components/Navigation/TheSideNav.vue' /* webpackChunkName: "components/navigation-the-side-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationAppLinks = import('../../components/Navigation/appLinks.vue' /* webpackChunkName: "components/navigation-app-links" */).then(c => wrapFunctional(c.default || c))
export const LazyOvermijNavigationNavigationbarOvermij = import('../../components/OvermijNavigation/NavigationbarOvermij.vue' /* webpackChunkName: "components/overmij-navigation-navigationbar-overmij" */).then(c => wrapFunctional(c.default || c))
export const LazyOvermijNavigationTheHeaderOvermij = import('../../components/OvermijNavigation/TheHeaderOvermij.vue' /* webpackChunkName: "components/overmij-navigation-the-header-overmij" */).then(c => wrapFunctional(c.default || c))
export const LazyOvermijNavigationTheSideNavOvermij = import('../../components/OvermijNavigation/TheSideNavOvermij.vue' /* webpackChunkName: "components/overmij-navigation-the-side-nav-overmij" */).then(c => wrapFunctional(c.default || c))
export const LazyOvermijNavigationAppLinksOverMij = import('../../components/OvermijNavigation/appLinksOverMij.vue' /* webpackChunkName: "components/overmij-navigation-app-links-over-mij" */).then(c => wrapFunctional(c.default || c))
export const LazyRouwVerliesBegeleiding = import('../../components/RouwVerlies/Begeleiding.vue' /* webpackChunkName: "components/rouw-verlies-begeleiding" */).then(c => wrapFunctional(c.default || c))
export const LazyRouwVerlies = import('../../components/RouwVerlies/RouwVerlies.vue' /* webpackChunkName: "components/rouw-verlies" */).then(c => wrapFunctional(c.default || c))
export const LazyRouwVerliesSignalen = import('../../components/RouwVerlies/Signalen.vue' /* webpackChunkName: "components/rouw-verlies-signalen" */).then(c => wrapFunctional(c.default || c))
export const LazySuccesverhalenReview = import('../../components/Succesverhalen/Review.vue' /* webpackChunkName: "components/succesverhalen-review" */).then(c => wrapFunctional(c.default || c))
