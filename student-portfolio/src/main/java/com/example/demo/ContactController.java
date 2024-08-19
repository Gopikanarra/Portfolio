
package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/submitContactForm")
    public String submitContactForm(@RequestParam("name") String name, 
                                    @RequestParam("email") String email, 
                                    @RequestParam("subject") String subject, 
                                    @RequestParam("message") String message) {
        Contact contact = new Contact(name, email, subject, message);
        contactRepository.save(contact);
        return "redirect:/success.html";
    }
}
