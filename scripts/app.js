/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/app.js":
/*!***********************************!*\
  !*** ./src/assets/scripts/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function orderedAccordion() {
  const orderedAccordionPanel = document.querySelectorAll('.d-catalogue__accordion-visible');

  for (let i = 0; i < orderedAccordionPanel.length; i++) {
    let curTitle = orderedAccordionPanel[i];
    orderedAccordionPanel[i].addEventListener('click', function () {
      let classes = this.getAttribute('class');
      let newClasses = '';
      let classesArr = classes.split(' ');
      let newClassesArr = classes.split(' ');

      for (let j = 0; j < classesArr.length; j++) {
        if (classesArr[j] == 'active') {
          classesArr.splice([j], 1);
        }
      }

      if (classesArr.length === newClassesArr.length) {
        classesArr.push('active');
        newClasses = classesArr.join(' ');
      } else {
        newClasses = classesArr.join(' ');
      }

      for (let l = 0; l < orderedAccordionPanel.length; l++) {
        oldClasses = orderedAccordionPanel[l].getAttribute('class');
        oldClassesArr = oldClasses.split(' ');

        for (let k = 0; k < oldClassesArr.length; k++) {
          if (oldClassesArr[k] == 'active') {
            oldClassesArr.splice([k], 1);
          }

          oldClasses = oldClassesArr.join(' ');
          orderedAccordionPanel[l].setAttribute('class', oldClasses);
        }
      }

      this.setAttribute('class', newClasses);
    });
  }
}

orderedAccordion();

function minusAmount() {
  const btnMinus = document.querySelectorAll('.field-num__btn-minus');
  btnMinus.forEach(function (item) {
    item.addEventListener('click', function () {
      const chosenBtn = this.parentElement.querySelector('.field-num__input');
      let minus = chosenBtn.value--;
    });
  });
}

minusAmount();

function plusAmount() {
  const btnMinus = document.querySelectorAll('.field-num__btn-plus');
  btnMinus.forEach(function (item) {
    item.addEventListener('click', function () {
      const chosenBtn = this.parentElement.querySelector('.field-num__input');
      let plus = chosenBtn.value++;
    });
  });
}

plusAmount();

/***/ })

/******/ });
//# sourceMappingURL=app.js.map