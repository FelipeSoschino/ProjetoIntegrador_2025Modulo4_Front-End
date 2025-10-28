package com.api.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.api.model.Usuario;

@RestController
@RequestMapping("/topicos")
@CrossOrigin(origins = "*") // Permite acesso ao app de qualquer origem (react_native)
public class TopicoController {

    @GetMapping
    public List<Usuario> listarUsuarios() {
        return List.of(
                new Usuario(1L, "João", "joao@example.com"),
                new Usuario(2L, "Maria", "maria@example.com"),
                new Usuario(3L, "Pedro", "pedro@example.com"));
    }
}
