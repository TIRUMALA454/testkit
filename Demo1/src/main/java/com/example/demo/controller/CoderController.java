package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.model.Coder;
import com.service.CoderService;

@RestController
@RequestMapping(path="/api")
public class CoderController {
	
	@Autowired
	CoderService coderservice;
	
	@RequestMapping("/Hello")
	public String HelloCoder()
	{
		String msg="Welcome to Spring Data Jpa";
		return msg;
	}
	
	@PostMapping("/addCoder")
	public ResponseEntity<Coder> addCoder(@RequestBody Coder c)
	{
		Coder c1=coderservice.addCoder(c);
		ResponseEntity re=new ResponseEntity<Coder>(c1,HttpStatus.OK);
		return re;
	}
	
	@GetMapping("/getCoders")
	public ResponseEntity<List<Coder>> getCoders()
	{
		List<Coder> lc1=coderservice.getCoders();
		ResponseEntity re=new ResponseEntity<List<Coder>>(lc1,HttpStatus.OK);
		return re;
	}
	
	@GetMapping(path="/getCoder/{cid}")
	public ResponseEntity<Coder> getEmpById(@PathVariable int cid) throws Throwable
	{
		Coder c1=coderservice.getCoderById(cid);
		
		ResponseEntity re=new ResponseEntity<Coder>(c1,HttpStatus.OK);
		return re;
	}
	
	@PostMapping(path="/addCoders")
	public ResponseEntity<List<Coder>> addCoders(@RequestBody List<Coder> ls)
	{
		List<Coder> le=coderservice.addCoders(ls);
		
		ResponseEntity re=new ResponseEntity<List<Coder>>(le,HttpStatus.OK);
		return re;
	}
	
	@PutMapping(path="/updateCoder")
	public ResponseEntity<Coder> updateCoder(@RequestBody Coder e) throws Throwable
	{
		Coder e1=coderservice.updateCoder(e);
		
		ResponseEntity re=new ResponseEntity<Coder>(e1,HttpStatus.OK);
		return re;
	}
	
	@DeleteMapping(path="/deleteCoder")
	public ResponseEntity<String> deleteCoder(@RequestBody Coder e)
	{
		coderservice.deleteCoder(e);
		
		ResponseEntity re=new ResponseEntity<String>("Deleted",HttpStatus.OK);
		return re;
	}
	
	@DeleteMapping(path="/deleteCoder/{eid}")
	public ResponseEntity<String> deleteCoderById(@PathVariable int eid)
	{
		coderservice.deleteCoderById(eid);
		
		ResponseEntity re=new ResponseEntity<String>("Deleted",HttpStatus.OK);
		return re;
	}
	
	@GetMapping("/getCodername/{cname}")
	public ResponseEntity<Coder> getCoderByCname(@PathVariable String cname) 
	{
		Coder c=coderservice.getCoderByCname(cname);
		ResponseEntity re=new ResponseEntity<Coder>(c,HttpStatus.OK);
		return re;
	}
	
	@GetMapping("/getCoderstech/{tech}")
	public ResponseEntity<List<Coder>> findByTechSorted(@PathVariable String tech) 
	{
		List<Coder> lc=coderservice.findByTechSorted(tech);
		ResponseEntity re=new ResponseEntity<List<Coder>>(lc,HttpStatus.OK);
		return re;
	}

}
