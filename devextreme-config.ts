import dxSelectBox from "devextreme/ui/select_box";
import dxSwitch from "devextreme/ui/switch";
import dxTextBox from "devextreme/ui/text_box";
import dxNumberBox from "devextreme/ui/number_box";
import dxTextArea from "devextreme/ui/text_area";
import dxTagBox from "devextreme/ui/tag_box";
import dxButton from "devextreme/ui/button";
import dxLoadPanel from "devextreme/ui/load_panel";
import dxDateBox from "devextreme/ui/date_box";
import dxCheckBox from "devextreme/ui/check_box";
import dxTreeView from "devextreme/ui/tree_view";

export const initializeDevExtremeConfig = (t: any) => {
  dxSelectBox.defaultOptions({
    options: {
      noDataText: `<div class="selectbox-no-data">${t(
        "devextreme.noData"
      )}</div>`,
      placeholder: t("devextreme.selectPlaceholder"),
      displayExpr: "name",
      valueExpr: "id",
      activeStateEnabled: false,
      searchEnabled: true,
    },
  });

  dxSwitch.defaultOptions({
    options: {
      activeStateEnabled: false,
      hoverStateEnabled: false,
      focusStateEnabled: false,
    },
  });

  dxButton.defaultOptions({
    options: {
      activeStateEnabled: false,
      focusStateEnabled: false,
    },
  });

  dxTextBox.defaultOptions({
    options: {
      activeStateEnabled: false,
    },
  });

  dxNumberBox.defaultOptions({
    options: {
      activeStateEnabled: false,
    },
  });

  dxTextArea.defaultOptions({
    options: {
      activeStateEnabled: false,
    },
  });

  dxLoadPanel.defaultOptions({
    options: {
      message: t("devextreme.loadPanel"),
      showPane: false,
      shading: true,
      shadingColor: "#ffffff80",
      indicatorSrc: "/loading.gif",
    },
  });

  dxTagBox.defaultOptions({
    options: {
      selectAllText: t("devextreme.selectAllText"),
      placeholder: t("devextreme.selectPlaceholder"),
      noDataText: `<div class="selectbox-no-data">${t(
        "devextreme.noData"
      )}</div>`,
    },
  });

  dxDateBox.defaultOptions({
    options: {
      placeholder: t("devextreme.dateBoxPlaceholder"),
      displayFormat: "dd.MM.yyyy",
    },
  });

  dxCheckBox.defaultOptions({
    options: {
      activeStateEnabled: false,
      hoverStateEnabled: false,
      focusStateEnabled: false,
    },
  });

  dxTreeView.defaultOptions({
    options: {
      selectAllText: t("devextreme.selectAllText"),
      placeholder: t("devextreme.selectPlaceholder"),
      noDataText: `<div class="selectbox-no-data">${t(
        "devextreme.noData"
      )}</div>`,
    },
  });
};
