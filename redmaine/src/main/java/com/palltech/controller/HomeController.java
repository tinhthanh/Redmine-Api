/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.palltech.controller;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author Trinh
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String prefix() {
        return "index";
    }
//        @RequestMapping(value = "{name:^(?!(js|css)).+}", method = RequestMethod.GET)
//    public String suffix() {
//        return "index";
//    }
    
    @RequestMapping(value = "{name:^(?!resources|assetss).+}/**", method = RequestMethod.GET)
    public String suffix() {
        return "index";
    }
    
//     @RequestMapping(value = "/**/{name:^(?!js|css).+}", method = RequestMethod.GET)
//    public String suffix() {
//        return "index";
//    }
    
//      @RequestMapping(value = "{name:^.(?!.js).+}/**", method = RequestMethod.GET)
//    public String suffix1() {
//        return "index";
//    }
}
