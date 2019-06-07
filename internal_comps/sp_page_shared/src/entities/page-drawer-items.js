import { LOCALE_EN } from "../../../sp_locale/src/entities/en";
import { CreatePageIcon, ViewPagesIcon } from "../../../sp_shared/src/entities/sp-icons";
import { navigateToPagesOverview, navigateToNewPage } from "../../../../src/state/action";

export function getPageDrawerItems() {
  return [
    {
      iconFunc: ViewPagesIcon,
      text: LOCALE_EN.SP_PAGE_SHARED.DRAWER.VIEW_PAGES,
      dispatchAction: navigateToPagesOverview()
    },
    {
      iconFunc: CreatePageIcon,
      text: LOCALE_EN.SP_PAGE_SHARED.DRAWER.CREATE_PAGE,
      dispatchAction: navigateToNewPage()
    }
  ];
}