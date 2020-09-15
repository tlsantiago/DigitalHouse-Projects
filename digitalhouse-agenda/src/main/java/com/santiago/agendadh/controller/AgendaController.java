package com.santiago.agendadh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.santiago.agendadh.model.Agenda;
import com.santiago.agendadh.repository.AgendaRepository;

@RestController
@RequestMapping("/agenda")
public class AgendaController {

	@Autowired
	private AgendaRepository agendaRepository;

	@PostMapping
	public void salvar(@RequestBody Agenda agenda) {
		agendaRepository.save(agenda);
	}

	@GetMapping
	public List<Agenda> listar() {
		return agendaRepository.findAll();
	}

	@GetMapping("/{id}")
	public Agenda buscar(@PathVariable Long id) {
		return agendaRepository.findById(id).get();
	}

	@DeleteMapping("/{id}")
	public void excluir(@PathVariable Long id) {
		agendaRepository.deleteById(id);
	}
	
	public void atualizar(@RequestBody Agenda agenda, @PathVariable Long id) {
		Agenda ag = agendaRepository.findById(id).get();
		
		ag.setNome(agenda.getNome());
		ag.setTelefone(agenda.getTelefone());
		
		agendaRepository.save(ag);
	}
}
