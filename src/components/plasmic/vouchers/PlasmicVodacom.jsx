// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wdjrQSNRX7ys49KwqunuZ4
// Component: b5ylLk5hNhI1
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 7oMbG7rPxeuI/component
import Footer from "../../Footer"; // plasmic-import: t96iChT22ax_/component
import { useScreenVariants as useScreenVariantshbagvQWqcZ69 } from "../website_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: HbagvQWqcZ69/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../website_starter/plasmic_website_starter.module.css"; // plasmic-import: wdjrQSNRX7ys49KwqunuZ4/projectcss
import sty from "./PlasmicVodacom.module.css"; // plasmic-import: b5ylLk5hNhI1/css
import airtimepng7BryvQNb02Ae from "./images/airtimepng.png"; // plasmic-import: 7BryvQNb02ae/picture
import dataBundlespng9MUo90AYcJzY from "./images/dataBundlespng.png"; // plasmic-import: 9MUo90aYCJzY/picture
import socialBundlespngSOIe7X7DTrO from "./images/socialBundlespng.png"; // plasmic-import: sOIe_7x7DTrO/picture

createPlasmicElementProxy;

export const PlasmicVodacom__VariantProps = new Array();

export const PlasmicVodacom__ArgProps = new Array();

function PlasmicVodacom__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshbagvQWqcZ69()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"shop"}
          data-plasmic-override={overrides.shop}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.shop
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <section className={classNames(projectcss.all, sty.section__rcSh1)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iCEgq
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#2E2854" }}
                      >
                        {"Vodacom"}
                      </span>
                    </React.Fragment>
                  </h1>
                }

                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__sGr96)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column___6LhLj)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___0F34C)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "500px"
                      : "auto"
                  }
                  loading={"lazy"}
                  onClick={async event => {
                    const $steps = {};
                    $steps["goToPage"] = true
                      ? (() => {
                          const actionArgs = {};
                          return (({ destination }) => {
                            location.assign(destination);
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      typeof $steps["goToPage"] === "object" &&
                      typeof $steps["goToPage"].then === "function"
                    ) {
                      $steps["goToPage"] = await $steps["goToPage"];
                    }
                  }}
                  src={{
                    src: airtimepng7BryvQNb02Ae,
                    fullWidth: 408,
                    fullHeight: 408,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__h712E
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h4
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4__c9Ymi
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#143757" }}
                          >
                            {"Airtime"}
                          </span>
                        </React.Fragment>
                      </h4>
                    }

                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__izG4)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__klZd8)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  onClick={async event => {
                    const $steps = {};
                    $steps["goToVodacomData"] = true
                      ? (() => {
                          const actionArgs = { destination: `/vodacom-data` };
                          return (({ destination }) => {
                            location.assign(destination);
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      typeof $steps["goToVodacomData"] === "object" &&
                      typeof $steps["goToVodacomData"].then === "function"
                    ) {
                      $steps["goToVodacomData"] = await $steps[
                        "goToVodacomData"
                      ];
                    }
                  }}
                  src={{
                    src: dataBundlespng9MUo90AYcJzY,
                    fullWidth: 408,
                    fullHeight: 408,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cvax3
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h4
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4__pacFk
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#143757" }}
                          >
                            {"Data"}
                          </span>
                        </React.Fragment>
                      </h4>
                    }

                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__bnnFz)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__adsah)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  onClick={async event => {
                    const $steps = {};
                    $steps["goToVodacomSocial"] = true
                      ? (() => {
                          const actionArgs = { destination: `/vodacom-social` };
                          return (({ destination }) => {
                            location.assign(destination);
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      typeof $steps["goToVodacomSocial"] === "object" &&
                      typeof $steps["goToVodacomSocial"].then === "function"
                    ) {
                      $steps["goToVodacomSocial"] = await $steps[
                        "goToVodacomSocial"
                      ];
                    }
                  }}
                  src={{
                    src: socialBundlespngSOIe7X7DTrO,
                    fullWidth: 408,
                    fullHeight: 408,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yVyS3
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h4
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4__xDwmE
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#143757" }}
                          >
                            {"Social"}
                          </span>
                        </React.Fragment>
                      </h4>
                    }

                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </p.Stack>
          </section>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  shop: ["shop", "header", "h1", "columns", "footer"],
  header: ["header"],
  h1: ["h1"],
  columns: ["columns"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicVodacom__ArgProps,
          internalVariantPropNames: PlasmicVodacom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicVodacom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "shop") {
    func.displayName = "PlasmicVodacom";
  } else {
    func.displayName = `PlasmicVodacom.${nodeName}`;
  }
  return func;
}

export const PlasmicVodacom = Object.assign(
  // Top-level PlasmicVodacom renders the root element
  makeNodeComponent("shop"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h1: makeNodeComponent("h1"),
    columns: makeNodeComponent("columns"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicVodacom
    internalVariantProps: PlasmicVodacom__VariantProps,
    internalArgProps: PlasmicVodacom__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Vodacom",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicVodacom;
/* prettier-ignore-end */
