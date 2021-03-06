import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Grid: () => import('../../components/Grid.vue' /* webpackChunkName: "components/grid" */).then(c => wrapFunctional(c.default || c)),
  LandingPage: () => import('../../components/Landing-page.vue' /* webpackChunkName: "components/landing-page" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  OverMij: () => import('../../components/Over-mij.vue' /* webpackChunkName: "components/over-mij" */).then(c => wrapFunctional(c.default || c)),
  Page: () => import('../../components/Page.vue' /* webpackChunkName: "components/page" */).then(c => wrapFunctional(c.default || c)),
  Review: () => import('../../components/Review.vue' /* webpackChunkName: "components/review" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  AanpakNietZoalsJeWilt: () => import('../../components/Aanpak/NietZoalsJeWilt.vue' /* webpackChunkName: "components/aanpak-niet-zoals-je-wilt" */).then(c => wrapFunctional(c.default || c)),
  AanpakSamenBereiken: () => import('../../components/Aanpak/SamenBereiken.vue' /* webpackChunkName: "components/aanpak-samen-bereiken" */).then(c => wrapFunctional(c.default || c)),
  AanpakTraject: () => import('../../components/Aanpak/Traject.vue' /* webpackChunkName: "components/aanpak-traject" */).then(c => wrapFunctional(c.default || c)),
  AanbodInfo: () => import('../../components/Aanbod/Aanbod-info.vue' /* webpackChunkName: "components/aanbod-info" */).then(c => wrapFunctional(c.default || c)),
  AanbodPakkettenInfo: () => import('../../components/Aanbod/Pakketten-info.vue' /* webpackChunkName: "components/aanbod-pakketten-info" */).then(c => wrapFunctional(c.default || c)),
  AanbodPakketten: () => import('../../components/Aanbod/Pakketten.vue' /* webpackChunkName: "components/aanbod-pakketten" */).then(c => wrapFunctional(c.default || c)),
  HomeHulpIdeaalComponent: () => import('../../components/Home/HulpIdeaalComponent.vue' /* webpackChunkName: "components/home-hulp-ideaal-component" */).then(c => wrapFunctional(c.default || c)),
  HomeLandingComponent: () => import('../../components/Home/LandingComponent.vue' /* webpackChunkName: "components/home-landing-component" */).then(c => wrapFunctional(c.default || c)),
  MenuAppLinks: () => import('../../components/Menu/AppLinks.vue' /* webpackChunkName: "components/menu-app-links" */).then(c => wrapFunctional(c.default || c)),
  MenuTheHeader: () => import('../../components/Menu/TheHeader.vue' /* webpackChunkName: "components/menu-the-header" */).then(c => wrapFunctional(c.default || c)),
  MenuTheSideNav: () => import('../../components/Menu/TheSideNav.vue' /* webpackChunkName: "components/menu-the-side-nav" */).then(c => wrapFunctional(c.default || c)),
  NavigationNavigationbar: () => import('../../components/Navigation/Navigationbar.vue' /* webpackChunkName: "components/navigation-navigationbar" */).then(c => wrapFunctional(c.default || c)),
  NavigationNavigationbarOvermij: () => import('../../components/Navigation/NavigationbarOvermij.vue' /* webpackChunkName: "components/navigation-navigationbar-overmij" */).then(c => wrapFunctional(c.default || c)),
  NavigationTheHeader: () => import('../../components/Navigation/TheHeader.vue' /* webpackChunkName: "components/navigation-the-header" */).then(c => wrapFunctional(c.default || c)),
  NavigationTheSideNav: () => import('../../components/Navigation/TheSideNav.vue' /* webpackChunkName: "components/navigation-the-side-nav" */).then(c => wrapFunctional(c.default || c)),
  NavigationAppLinks: () => import('../../components/Navigation/appLinks.vue' /* webpackChunkName: "components/navigation-app-links" */).then(c => wrapFunctional(c.default || c)),
  OvermijNavigationTheHeaderOvermij: () => import('../../components/OvermijNavigation/TheHeaderOvermij.vue' /* webpackChunkName: "components/overmij-navigation-the-header-overmij" */).then(c => wrapFunctional(c.default || c)),
  OvermijNavigationTheSideNavOvermij: () => import('../../components/OvermijNavigation/TheSideNavOvermij.vue' /* webpackChunkName: "components/overmij-navigation-the-side-nav-overmij" */).then(c => wrapFunctional(c.default || c)),
  OvermijNavigationAppLinksOverMij: () => import('../../components/OvermijNavigation/appLinksOverMij.vue' /* webpackChunkName: "components/overmij-navigation-app-links-over-mij" */).then(c => wrapFunctional(c.default || c)),
  SuccesverhalenReview: () => import('../../components/Succesverhalen/Review.vue' /* webpackChunkName: "components/succesverhalen-review" */).then(c => wrapFunctional(c.default || c)),
  RouwVerliesBegeleiding: () => import('../../components/RouwVerlies/Begeleiding.vue' /* webpackChunkName: "components/rouw-verlies-begeleiding" */).then(c => wrapFunctional(c.default || c)),
  RouwVerlies: () => import('../../components/RouwVerlies/RouwVerlies.vue' /* webpackChunkName: "components/rouw-verlies" */).then(c => wrapFunctional(c.default || c)),
  RouwVerliesSignalen: () => import('../../components/RouwVerlies/Signalen.vue' /* webpackChunkName: "components/rouw-verlies-signalen" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
