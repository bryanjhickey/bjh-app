module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "plugins": [
        "react",
        "react-hooks",
        "jsx-a11y",
        "prettier",
        "@typescript-eslint"
    ],
    "extends": [
      "plugin:react/recommended",
      "airbnb",
      "plugin:react/recommended",
      "airbnb",
      "prettier",
      "plugin:jsx-a11y/recommended",
    ],
    "rules": {
    "jest/prefer-strict-equal": "error",
    "jest/prefer-to-have-length": "warn",
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.[jt]s",
          "**/*.spec.[jt]s",
          "**/*.test.[jt]sx",
          "**/*.spec.[jt]sx"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never",
        "js": "never",
        "jsx": "never"
      }
    ],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "function-declaration"
      }
    ]
  },
  "overrides": [
    {
      "files": "**/*.+(ts|tsx)",
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "plugins": ["@typescript-eslint/eslint-plugin"],
      "extends": [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
      ],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-use-before-define": [0],
        "@typescript-eslint/no-use-before-define": [1],
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": [
          "error",
          {
            "devDependencies": [
              "**/*.test.ts",
              "**/*.spec.ts",
              "**/*.test.tsx",
              "**/*.spec.tsx"
            ]
          }
        ],
        "quotes": "off",
        "@typescript-eslint/quotes": [
          2,
          "backtick",
          {
            "avoidEscape": true
          }
        ],
        "@typescript-eslint/no-unused-vars": [2, { "argsIgnorePattern": "^_" }]
      }
    }
  ],
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": "."
      }
    },
    "react": {
      "version": "detect"
    }
  }
}