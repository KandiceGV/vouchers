// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wdjrQSNRX7ys49KwqunuZ4
// Component: J3xbpnsFIP_W
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponent
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponentHelper
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../website_starter/plasmic_website_starter.module.css"; // plasmic-import: wdjrQSNRX7ys49KwqunuZ4/projectcss
import sty from "./PlasmicMunicipalmeter.module.css"; // plasmic-import: J3xbpnsFIP_W/css

createPlasmicElementProxy;

export const PlasmicMunicipalmeter__VariantProps = new Array();

export const PlasmicMunicipalmeter__ArgProps = new Array();

function PlasmicMunicipalmeter__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: p.generateOnMutateForSpec("value", FormWrapper_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (() => {
    const child$Props = {
      className: classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.form
      ),
      colon: false,
      extendedOnValuesChange: p.generateStateOnChangePropForCodeComponents(
        $state,
        "value",
        ["form", "value"],
        FormWrapper_Helpers
      ),
      formItems: (() => {
        const __composite = [
          { label: null, name: null, inputType: null },
          { label: null, name: "message", inputType: null }
        ];

        __composite["0"]["label"] = "Meter Number";
        __composite["0"]["name"] = "meter_number";
        __composite["0"]["inputType"] = "Text";
        __composite["1"]["label"] = "Amount";
        __composite["1"]["inputType"] = "Number";
        return __composite;
      })(),
      labelAlign: "right",
      labelCol: { span: 8, horizontalOnly: true },
      layout: "horizontal",
      mode: "simplified",
      ref: ref => {
        $refs["form"] = ref;
      },
      submitSlot: (
        <AntdButton
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          submitsForm={true}
          type={"primary"}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"PROCEED"}
          </div>
        </AntdButton>
      ),

      wrapperCol: (() => {
        const __composite = { span: null, horizontalOnly: true };
        __composite["span"] = 20;
        return __composite;
      })()
    };
    p.initializeCodeComponentStates(
      $state,
      [
        {
          name: "value",
          plasmicStateName: "form.value"
        }
      ],

      [],
      FormWrapper_Helpers ?? {},
      child$Props
    );
    return (
      <FormWrapper
        data-plasmic-name={"form"}
        data-plasmic-override={overrides.form}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        {...child$Props}
      />
    );
  })();
}

const PlasmicDescendants = {
  form: ["form", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMunicipalmeter__ArgProps,
          internalVariantPropNames: PlasmicMunicipalmeter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMunicipalmeter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "form") {
    func.displayName = "PlasmicMunicipalmeter";
  } else {
    func.displayName = `PlasmicMunicipalmeter.${nodeName}`;
  }
  return func;
}

export const PlasmicMunicipalmeter = Object.assign(
  // Top-level PlasmicMunicipalmeter renders the root element
  makeNodeComponent("form"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicMunicipalmeter
    internalVariantProps: PlasmicMunicipalmeter__VariantProps,
    internalArgProps: PlasmicMunicipalmeter__ArgProps
  }
);

export default PlasmicMunicipalmeter;
/* prettier-ignore-end */
