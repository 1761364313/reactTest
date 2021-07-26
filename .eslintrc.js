const path = require('path')

module.exports = {
    "extends": "airbnb",
    "plugins": ["react-hooks"],
    "parser": "babel-eslint",
    "rules": {
      "no-multiple-empty-lines": [2, {"max": 1}], // 空行最多只能 一行
      "object-curly-newline": 0, // 解构赋值的时 可以不用换行
      "semi": ["error", "never"], // 不要分号
      "no-octal-escape": 0, // 二进制
      "no-plusplus": "off",
      "react/require-default-props": "off",
      "react/prop-types": "off",
      "no-param-reassign": "off",
      "max-len": "off",
      "camelcase": "off",
      "react/jsx-filename-extension": "off",
      "react/prefer-stateless-function": "off",
      "consistent-return": "off",
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "no-control-regex": 0,
      "jsx-a11y/anchor-is-valid": 0,
      "no-script-url": 0,
      "react-hooks/rules-of-hooks": "error",
      "prefer-destructuring": "off",
      "eqeqeq": 'off',
      "no-shadow": "off",
      "no-debugger": "off",
      "no-console": "off",
      "no-restricted-properties": "off",
      "func-names": 0,
      "react/no-unused-prop-types":0,
      "react/react-in-jsx-scope": 0,
      "import/prefer-default-export": 0,
      "no-underscore-dangle": 0,
      "no-nested-ternary": 0,
      "react/no-string-refs": 0,
      "comma-dangle": ["error", { // 最后一个元素 不需要加逗号
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }],
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    },
    "overrides": [
      {
        "files": "types.js",
        "rules": {
          "import/no-mutable-exports": "off"
        }
      },
      {
        "files": ["webpack.*.js"],
        "rules": {
          "import/no-extraneous-dependencies": "off"
        }
      },
      {
        "files": ["reducers.js"],
        "rules": {
          "no-param-reassign": "off"
        }
      }
    ],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["node_modules", "web_modules", "config"]
      },
      "webpack": path.join(__dirname,"./webpack.base.config.js")
    }
  },
  "env": {
    "browser": true
  },
  "globals": {
    "process": true,
    "__ROOT_REDUCER__": true,
    "__ROOT_SAGA__": true
  }
}
