// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wdjrQSNRX7ys49KwqunuZ4
// Component: 44JppnCAf-bN
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Headerr from "../../Headerr"; // plasmic-import: 7oMbG7rPxeuI/component
import Footer from "../../Footer"; // plasmic-import: t96iChT22ax_/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_website_starter.module.css"; // plasmic-import: wdjrQSNRX7ys49KwqunuZ4/projectcss
import sty from "./PlasmicStreamingServices.module.css"; // plasmic-import: 44JppnCAf-bN/css
import magicthumbpngRozBpIeU6Bbu from "./images/magicthumbpng.png"; // plasmic-import: ROZBpIeU6BBU/picture

createPlasmicElementProxy;

export const PlasmicStreamingServices__VariantProps = new Array();

export const PlasmicStreamingServices__ArgProps = new Array();

function PlasmicStreamingServices__RenderFunc(props) {
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
            sty.shop
          )}
        >
          <Headerr
            data-plasmic-name={"headerr"}
            data-plasmic-override={overrides.headerr}
            className={classNames("__wab_instance", sty.headerr)}
          />

          <section className={classNames(projectcss.all, sty.section__lO99Y)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2WLnH
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
                        {"Streaming Services"}
                      </span>
                    </React.Fragment>
                  </h1>
                }

                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__lkzac)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div
                data-plasmic-name={"column"}
                data-plasmic-override={overrides.column}
                className={classNames(projectcss.all, sty.column)}
              >
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: magicthumbpngRozBpIeU6Bbu,
                    fullWidth: 500,
                    fullHeight: 500,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__njUhi
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h4
                        data-plasmic-name={"h4"}
                        data-plasmic-override={overrides.h4}
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#143757" }}
                          >
                            {"GV Magic Subscription"}
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
  shop: ["shop", "headerr", "h1", "columns", "column", "img", "h4", "footer"],
  headerr: ["headerr"],
  h1: ["h1"],
  columns: ["columns", "column", "img", "h4"],
  column: ["column", "img", "h4"],
  img: ["img"],
  h4: ["h4"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicStreamingServices__ArgProps,
          internalVariantPropNames: PlasmicStreamingServices__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicStreamingServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "shop") {
    func.displayName = "PlasmicStreamingServices";
  } else {
    func.displayName = `PlasmicStreamingServices.${nodeName}`;
  }
  return func;
}

export const PlasmicStreamingServices = Object.assign(
  // Top-level PlasmicStreamingServices renders the root element
  makeNodeComponent("shop"),
  {
    // Helper components rendering sub-elements
    headerr: makeNodeComponent("headerr"),
    h1: makeNodeComponent("h1"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    img: makeNodeComponent("img"),
    h4: makeNodeComponent("h4"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicStreamingServices
    internalVariantProps: PlasmicStreamingServices__VariantProps,
    internalArgProps: PlasmicStreamingServices__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Streaming Services",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicStreamingServices;
/* prettier-ignore-end */
