// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wdjrQSNRX7ys49KwqunuZ4
// Component: kUEjkiOrGPqM
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 7oMbG7rPxeuI/component
import Municipalmeter from "../../Municipalmeter"; // plasmic-import: J3xbpnsFIP_W/component
import Footer from "../../Footer"; // plasmic-import: t96iChT22ax_/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../website_starter/plasmic_website_starter.module.css"; // plasmic-import: wdjrQSNRX7ys49KwqunuZ4/projectcss
import sty from "./PlasmicMunicipality.module.css"; // plasmic-import: kUEjkiOrGPqM/css

createPlasmicElementProxy;

export const PlasmicMunicipality__VariantProps = new Array();

export const PlasmicMunicipality__ArgProps = new Array();

function PlasmicMunicipality__RenderFunc(props) {
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

          <section className={classNames(projectcss.all, sty.section__e24Bm)}>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
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
                        {"Local Municipality"}
                      </span>
                      <React.Fragment>{"\n"}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#2E2854" }}
                      >
                        {"Prepaid Electricity"}
                      </span>
                    </React.Fragment>
                  </h1>
                }

                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__yClvx)}>
            <Municipalmeter
              data-plasmic-name={"municipalmeter"}
              data-plasmic-override={overrides.municipalmeter}
              className={classNames("__wab_instance", sty.municipalmeter)}
            />
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
  shop: ["shop", "header", "text", "h1", "municipalmeter", "footer"],
  header: ["header"],
  text: ["text", "h1"],
  h1: ["h1"],
  municipalmeter: ["municipalmeter"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMunicipality__ArgProps,
          internalVariantPropNames: PlasmicMunicipality__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMunicipality__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "shop") {
    func.displayName = "PlasmicMunicipality";
  } else {
    func.displayName = `PlasmicMunicipality.${nodeName}`;
  }
  return func;
}

export const PlasmicMunicipality = Object.assign(
  // Top-level PlasmicMunicipality renders the root element
  makeNodeComponent("shop"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    text: makeNodeComponent("text"),
    h1: makeNodeComponent("h1"),
    municipalmeter: makeNodeComponent("municipalmeter"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicMunicipality
    internalVariantProps: PlasmicMunicipality__VariantProps,
    internalArgProps: PlasmicMunicipality__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "municipalities",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMunicipality;
/* prettier-ignore-end */